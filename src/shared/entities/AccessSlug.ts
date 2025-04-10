import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Tenant } from "./Tenant.js"
import { Agent } from "./Agent.js"

@Entity<AccessSlug>("access_slugs", {
  allowApiCrud: true,
})
export class AccessSlug {
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
  agent_id!: string

  @Relations.toOne(() => Agent, { field: "agent_id" })
  agent!: Agent

  @Fields.string({ allowNull: true })
  slug?: string

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date
}
