<template lang="pug">
.photo-capture-button.flex.flex-column.items-center
  .q-py-md.q-px-xs(v-if="!photoUrl" :style="'border: 3px solid; border-radius: 10px;'")
    q-btn.rounded-border(flat @click="openPhotoOptions")
      q-img(:src="$q.dark.isActive ? '/icons/camera.png' : '/icons/camera-dark.png'" width="80px" height="80px")
  .relative-position.full-width(v-if="photoUrl")
    q-img.q-my-sm(:src="photoUrl" style="max-width: 100%; border-radius: 8px; min-width: 280px;")
    q-btn.absolute.bg-white(icon="delete" color="black" dense flat @click="handleDeletePhoto" :style="'bottom: 12px; right: 4px;'")
  q-dialog(v-model="showFileDialog")
    q-card
      q-card-section
        input(type="file" accept="image/*" ref="fileInput" @change="handleFileUpload")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PhotoCaptureButton',

  data() {
    return {
      photoUrl: '',
      showFileDialog: false,
    }
  },

  methods: {
    async openPhotoOptions(): Promise<void> {
      try {
        await this.openCamera()
      } catch (error) {
        console.error('Camera not available. Falling back to file picker.', error)
        this.openFilePicker()
      }
    },

    async openCamera(): Promise<void> {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        const videoElement = document.createElement('video')
        videoElement.srcObject = stream
        videoElement.play()

        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')

        videoElement.addEventListener('loadeddata', () => {
          context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
          this.photoUrl = canvas.toDataURL('image/png')
          stream.getTracks().forEach((track) => track.stop())
        })
      } catch (error) {
        console.error('Error accessing camera:', error)
        throw error
      }
    },

    openFilePicker(): void {
      this.showFileDialog = true
    },

    handleFileUpload(): void {
      const input = this.$refs.fileInput as HTMLInputElement
      const file = input?.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.photoUrl = e.target?.result as string
        }
        reader.readAsDataURL(file)
      }
      this.showFileDialog = false
    },

    handleDeletePhoto(): void {
      this.photoUrl = ''
    },
  },
})
</script>

<style scoped>
.photo-capture-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

q-img {
  margin-top: 16px;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
