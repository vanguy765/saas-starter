import { Entity, Field, Fields, Validators } from "remult"
import { Relations } from "remult"
import { CallLog } from "./CallLog.js"
import { Order } from "./Order.js"
import { UserEvent } from "./UserEvent.js"
import { UserPreference } from "./UserPreference.js"
import { Tenant } from "./Tenant.js"
import { Industry } from "./Industry.js"

@Entity<Customer>("customers", {
  allowApiCrud: true,
})
export class Customer {
  @Fields.uuid()
  id = ""

  @Fields.string()
  tenant_ident!: string

  @Relations.toOne(() => Tenant, { field: "tenant_ident" })
  tenantTenantIdent!: Tenant

  @Fields.uuid({ validate: [Validators.unique] })
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  @Fields.uuid({ allowNull: true })
  industry_id?: string

  @Relations.toOne(() => Industry, { field: "industry_id" })
  industry?: Industry

  @Fields.string({ allowNull: true })
  first_name?: string

  @Fields.string({ allowNull: true })
  last_name?: string

  @Fields.string({
    validate: [Validators.unique],
    allowNull: true,
    inputType: "email",
  })
  email?: string

  @Fields.string({ allowNull: true })
  phone?: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.uuid({ allowNull: true })
  last_order_id?: string

  @Fields.dateOnly({ allowNull: true })
  last_order_date?: Date

  @Fields.string({ validate: [Validators.unique] })
  customer_ref_id!: string

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.uuid({ allowNull: true })
  user_id?: string

  @Fields.uuid({ allowNull: true })
  user_preference_id?: string

  @Relations.toOne(() => UserPreference, { field: "user_preference_id" })
  user_preference?: UserPreference

  // Relations toMany
  @Relations.toMany(() => CallLog)
  call_logs?: CallLog[]

  @Relations.toMany(() => Order)
  orders?: Order[]

  @Relations.toMany(() => UserEvent)
  user_events?: UserEvent[]
}
