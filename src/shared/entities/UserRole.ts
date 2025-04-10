import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Tenant } from "./Tenant.js"
import { Role } from "./Role.js"

@Entity<UserRole>("user_roles", {
  allowApiCrud: true,
  id: ["user_id", "role_id"],
})
export class UserRole {
  @Fields.uuid()
  user_id!: string

  @Fields.uuid()
  role_id!: string

  @Relations.toOne(() => Role, { field: "role_id" })
  role!: Role

  @Fields.string()
  tenant_ident!: string

  @Relations.toOne(() => Tenant, { field: "tenant_ident" })
  tenantTenantIdent!: Tenant

  @Fields.uuid()
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date
}
