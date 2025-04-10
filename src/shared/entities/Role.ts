import { Entity, Fields } from "remult"
import { Relations } from "remult"
import { UserRole } from "./UserRole.js"

@Entity<Role>("roles", {
  allowApiCrud: true,
  defaultOrderBy: { name: "asc" },
})
export class Role {
  @Fields.uuid()
  id = ""

  @Fields.string()
  name!: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  @Fields.json({ allowNull: true })
  permissions? = {}

  // Relations toMany
  @Relations.toMany(() => UserRole)
  user_roles?: UserRole[]
}
