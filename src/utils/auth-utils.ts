import { useAuthStore } from "src/stores/auth";

export const checkAndHandleAuth = async () => {
  const authStore = useAuthStore();

  if (!authStore.checkAuth()) {
    return false;
  }

  return true;
}
