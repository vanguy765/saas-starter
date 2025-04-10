import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Customer } from "./Customer.js"

@Entity<UserEvent>("user_events", {
  allowApiCrud: true,
})
export class UserEvent {
  @Fields.uuid()
  id = ""

  @Fields.uuid()
  customer_id!: string

  @Relations.toOne(() => Customer, { field: "customer_id" })
  customer!: Customer

  @Fields.string({ allowNull: true })
  summary?: string

  @Fields.date()
  event_date!: Date

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  @Fields.uuid()
  user_id!: string
}
