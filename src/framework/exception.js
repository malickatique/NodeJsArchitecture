class ApiError extends Error {
    constructor(data) {
        super(data.message);

        this.status = data.status;
        this.message = data.message ?? 'Something went wrong!';
        if (data?.map) {
            this.data = {
                errors: [
                    {
                        path: data?.map?.join('.') ?? '',
                        field: data?.map[data?.map?.length - 1] ?? '',
                        message: data.message ?? 'Invalid value',
                    },
                ],
                ...data.data,
            };
        } else {
            this.data = data.data ?? {};
        }
        this.accessToken = data.accessToken ?? null;
        this.isValid = data.isValid ?? null;
        this.isOperational = data.isOperational ?? true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    ApiError,
};
