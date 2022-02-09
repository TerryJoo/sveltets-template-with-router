import { user } from '../stores'

export function logout() {
  user.update(null)
}
