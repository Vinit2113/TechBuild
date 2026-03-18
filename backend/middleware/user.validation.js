const userSchema = Joi.object({
  id: Joi.number().integer().positive().optional(),
  first_name: Joi.string().max(100).required(),
  last_name: Joi.string().max(100).required(),

  email: Joi.string().email().max(255).required(),
  phone: Joi.string()
    .pattern(/^[0-9]{9,15}$/)
    .optional()
    .allow(null, ""),

  password: Joi.string().max(255).required(), // changed from password_hash
  is_verified: Joi.boolean().optional(),
  is_active: Joi.boolean().optional(),
  soft_delete: Joi.boolean().optional(), // added
  role: Joi.string().valid("user", "admin").optional(), // added

  created_at: Joi.date().optional(),
  updated_at: Joi.date().optional(),
  deleted_at: Joi.date().allow(null).optional(),
});
