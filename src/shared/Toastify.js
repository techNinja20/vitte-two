import { toast } from "react-toastify"

export function toastify(type, message) {
  if (type === "success") {
    toast.success(message)
  } else if (type === "error") {
    toast.error(message)
  } else if (type === "warning") {
    toast.warning(message)
  } else if (type === "info") {
    toast.info(message)
  } else {
    toast(message)
  }
}
