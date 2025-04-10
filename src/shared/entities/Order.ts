import { Entity, Field, Fields, Validators } from "remult"
import { Relations } from "remult"
import { CallLog } from "./CallLog.js"
import { OrderItem } from "./OrderItem.js"
import { Tenant } from "./Tenant.js"
import { Customer } from "./Customer.js"

@Entity<Order>("orders", {
  allowApiCrud: true,
})
export class Order {
  @Fields.uuid()
  id = ""

  @Fields.uuid()
  customer_id!: string

  @Relations.toOne(() => Customer, { field: "customer_id" })
  customer!: Customer

  @Fields.string()
  tenant_ident!: string

  @Relations.toOne(() => Tenant, { field: "tenant_ident" })
  tenantTenantIdent!: Tenant

  @Fields.uuid({ validate: [Validators.unique] })
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  @Fields.date()
  orderdate!: Date

  @Fields.string()
  status!: string

  @Fields.number()
  total!: number

  @Fields.number({ allowNull: true })
  tax?: number

  @Fields.string({ validate: [Validators.unique] })
  order_ref_id!: string

  @Fields.string({ validate: [Validators.unique] })
  customer_ref_id!: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  // Relations toMany
  @Relations.toMany(() => CallLog)
  call_logs?: CallLog[]

  @Relations.toMany(() => OrderItem)
  order_items?: OrderItem[]
}
