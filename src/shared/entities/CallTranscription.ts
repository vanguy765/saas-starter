import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Tenant } from "./Tenant.js"
import { CallLog } from "./CallLog.js"

@Entity<CallTranscription>("call_transcriptions", {
  allowApiCrud: true,
})
export class CallTranscription {
  @Fields.uuid()
  id = ""

  @Fields.string()
  tenant_ident!: string

  @Relations.toOne(() => Tenant, { field: "tenant_ident" })
  tenantTenantIdent!: Tenant

  @Fields.uuid()
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  @Fields.uuid()
  call_log_id!: string

  @Relations.toOne(() => CallLog, { field: "call_log_id" })
  call_log!: CallLog

  @Fields.string({ allowNull: true })
  summary?: string

  @Fields.integer({ allowNull: true })
  wordcount?: number

  @Fields.string({ allowNull: true })
  sentiment?: string

  @Fields.string({ allowNull: true })
  topics?: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date
}
