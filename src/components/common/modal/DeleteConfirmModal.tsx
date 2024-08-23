import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useDeleteProductMutation } from "@/redux/api/productsApi"
import { ReactNode, useState } from "react"
import { toast } from "react-toastify"

interface TDeleteConfirmProps {
  children:ReactNode , 
  productInfo : {
    id:string  ,
    name:string
  }
}

export default function DeleteConfirmModal({children ,productInfo}:TDeleteConfirmProps) {
  const [isOpen ,setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }
  const [deleteProduct , {isLoading}] = useDeleteProductMutation()

  const handleDeleteProduct = async () => {
    try {
      const response = await deleteProduct(productInfo.id).unwrap()
      toast.success('product deleted successfully' , {position :'top-right'})
      handleClose()
    } catch (error) {
      if (error && typeof error === "object" && "data" in error) {
        const err = error as { data: { message: string } };

        toast.error(err.data.message || "An unexpected error occurred", {
          position: "top-right",
        });
      } else {
        toast.error("An unexpected error occurred", { position: "top-right" });
      }
    }
  }

  return (
    <AlertDialog open={isOpen}>
    <AlertDialogTrigger asChild onClick={() => setIsOpen(true)}>
      {children}
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          Do yo want delete  <span className="font-bold text-primary text-lg "> " {productInfo.name} "</span>  this product ?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
        <Button disabled={isLoading}  className="bg-red-500 " onClick={handleDeleteProduct}>
            {isLoading ? <Spinner size="small" className="text-primary " /> : <span>Delete confirm</span>}
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}
