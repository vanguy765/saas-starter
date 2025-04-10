import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { AccessPhone } from "./AccessPhone.js"
import { AccessSlug } from "./AccessSlug.js"
import { CallLog } from "./CallLog.js"
import { Tenant } from "./Tenant.js"
import { Industry } from "./Industry.js"

@Entity<Agent>("agents", {
  allowApiCrud: true,
  defaultOrderBy: { name: "asc" },
})
export class Agent {
  @Fields.uuid()
  id = ""

  @Fields.string()
  name!: string

  @Fields.string({ allowNull: true })
  phone_number?: string

  @Fields.string()
  resource_folder!: string

  @Fields.string({ allowNull: true })
  description?: string

  @Fields.uuid({ allowNull: true })
  industry_id?: string

  @Relations.toOne(() => Industry, { field: "industry_id" })
  industry?: Industry

  @Fields.string()
  tenant_ident!: string

  @Relations.toOne(() => Tenant, { field: "tenant_ident" })
  tenantTenantIdent!: Tenant

  @Fields.uuid()
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  @Fields.string({ allowNull: true })
  agent_type?: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  @Fields.uuid({ allowNull: true })
  agent_ref_id?: string

  // Relations toMany
  @Relations.toMany(() => AccessPhone)
  access_phones?: AccessPhone[]

  @Relations.toMany(() => AccessSlug)
  access_slugs?: AccessSlug[]

  @Relations.toMany(() => CallLog)
  call_logs?: CallLog[]
}
