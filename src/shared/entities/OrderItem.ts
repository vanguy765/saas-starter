import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Product } from "./Product.js"
import { Order } from "./Order.js"

@Entity<OrderItem>("order_items", {
  allowApiCrud: true,
})
export class OrderItem {
  @Fields.uuid()
  id = ""

  @Fields.uuid()
  order_id!: string

  @Relations.toOne(() => Order, { field: "order_id" })
  order!: Order

  @Fields.uuid()
  product_id!: string

  @Relations.toOne(() => Product, { field: "product_id" })
  product!: Product

  @Fields.integer()
  quantity!: number

  @Fields.number()
  price!: number

  @Fields.string()
  order_item_ref_id!: string

  @Fields.string()
  order_ref_id!: string

  @Fields.string()
  product_ref_id!: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date
}
