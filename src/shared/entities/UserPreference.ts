import { Entity, Fields } from "remult"
import { Relations } from "remult"
import { Customer } from "./Customer.js"

@Entity<UserPreference>("user_preferences", {
  allowApiCrud: true,
})
export class UserPreference {
  @Fields.uuid()
  id = ""

  @Fields.literal(() => ["email", "mail", "none", "phone", "sms"] as const, {
    allowNull: true,
  })
  contact_by_enum?: "email" | "mail" | "none" | "phone" | "sms" = "none"

  @Fields.json({ allowNull: true })
  personnal? = {}

  @Fields.json({ allowNull: true })
  business? = {}

  @Fields.json({ allowNull: true })
  orders? = {}

  @Fields.string({ allowNull: true })
  resource_folder?: string

  @Fields.uuid()
  user_id!: string

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  @Fields.boolean({ allowNull: true })
  is_active?: boolean

  // Relations toMany
  @Relations.toMany(() => Customer)
  customers?: Customer[]
}
