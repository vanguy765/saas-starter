import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { CallTranscription } from "./CallTranscription.js"
import { Tenant } from "./Tenant.js"
import { Order } from "./Order.js"
import { Customer } from "./Customer.js"
import { Agent } from "./Agent.js"

@Entity<CallLog>("call_logs", {
  allowApiCrud: true,
})
export class CallLog {
  @Fields.uuid()
  id = ""

  @Fields.uuid()
  customer_id!: string

  @Relations.toOne(() => Customer, { field: "customer_id" })
  customer!: Customer

  @Fields.uuid({ allowNull: true })
  agent_id?: string

  @Relations.toOne(() => Agent, { field: "agent_id" })
  agent?: Agent

  @Fields.uuid({ allowNull: true })
  reorder_id?: string

  @Relations.toOne(() => Order, { field: "reorder_id" })
  reorder?: Order

  @Fields.string({ allowNull: true })
  phone_session_id?: string

  @Fields.string({ allowNull: true })
  phone_number?: string

  // Unhandled data type: "interval" for db "postgres"
  @Fields.string({ allowNull: true })
  duration?: string

  @Fields.integer({ allowNull: true })
  rating?: number

  @Fields.string({ allowNull: true })
  notes?: string

  @Fields.uuid({ allowNull: true })
  original_schedule_id?: string

  @Fields.date({ allowNull: true })
  scheduled_date_time?: Date

  @Fields.literal(
    () =>
      [
        "complaint",
        "feedback",
        "inquiry",
        "other",
        "sales",
        "support",
      ] as const,
    { allowNull: true },
  )
  purpose?: "complaint" | "feedback" | "inquiry" | "other" | "sales" | "support"

  @Fields.literal(
    () =>
      [
        "cancelled",
        "ordered",
        "pending",
        "scheduled",
        "successful",
        "unsuccessful",
      ] as const,
    { allowNull: true },
  )
  outcome?:
    | "cancelled"
    | "ordered"
    | "pending"
    | "scheduled"
    | "successful"
    | "unsuccessful"

  @Fields.literal(
    () =>
      ["cancelled", "completed", "in_progress", "missed", "scheduled"] as const,
    { allowNull: true },
  )
  status?: "cancelled" | "completed" | "in_progress" | "missed" | "scheduled"

  @Fields.boolean()
  is_outgoing = true

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.uuid()
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  // Relations toMany
  @Relations.toMany(() => CallTranscription)
  call_transcriptions?: CallTranscription[]
}
