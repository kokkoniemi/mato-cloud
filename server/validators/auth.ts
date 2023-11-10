import Joi from 'joi';

const {
    object, string
} = Joi.types();

export const linkRequestSchema = object.keys({
    email: string.email({ minDomainSegments: 2 }).required().max(255)
});

export const validateCreateLinkRequest = async (body: Record<string, any>) => {
    return linkRequestSchema.validateAsync(body, { stripUnknown: true });
}

export const loginRequestSchema = object.keys({
    email: string.email({ minDomainSegments: 2 }).required().max(255),
    loginHash: string.required().max(255),
    fingerprint: string.required()
});

export const validateLoginRequest = async (body: Record<string, any>) => {
    return loginRequestSchema.validateAsync(body, { stripUnknown: true });
}

export const tokenRefreshRequestSchema = object.keys({
    token: string.required()
})

export const validateTokenRefreshRequest = async (body: Record<string, any>) => {
    return tokenRefreshRequestSchema.validateAsync(body, { stripUnknown: true });
}
