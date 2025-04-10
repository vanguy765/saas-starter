import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Agent } from "./Agent.js"
import { Tenant } from "./Tenant.js"

@Entity<AccessPhone>("access_phones", {
  allowApiCrud: true,
})
export class AccessPhone {
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

  @Fields.string({ allowNull: true })
  number?: string

  @Fields.uuid({ allowNull: true })
  agent_id?: string

  @Relations.toOne(() => Agent, { field: "agent_id" })
  agent?: Agent

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  @Fields.boolean({ allowNull: true })
  is_active?: boolean
}
