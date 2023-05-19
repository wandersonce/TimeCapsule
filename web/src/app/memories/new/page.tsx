
import MediaPicker from "@/components/MediaPicker"
import NewMemoryForm from "@/components/NewMemoryForm"
import { Camera, ChevronLeft } from "lucide-react"
import Link from "next/link"

function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">

      <Link href="/" className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
        <ChevronLeft className="h-4 w-4"/>
        Back to Timeline
      </Link>

    <NewMemoryForm />
    </div>
  )
}

export default NewMemory