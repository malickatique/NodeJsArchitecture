class Repository {
    constructor() {}

    paginate(query = {}) {
        var pagination = {};

        if (query.withoutPagination) return pagination;

        if (query.limit) pagination.limit = parseInt(query.limit);
        else pagination.limit = 10;

        if (query.page) pagination.page = parseInt(query.page);
        else pagination.page = 1;

        pagination.skip = pagination.limit * (pagination.page - 1);

        return pagination;
    }

    filtering(query = {}) {
        let queryObject = { ...query };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach((field) => delete queryObject[field]);
        let queryStr = JSON.stringify(queryObject);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        queryObject = JSON.parse(queryStr);
        const filteredData = queryObject ? queryObject : {};
        return filteredData;
    }

    sorting(query = {}) {
        let sortBy;
        if (query.sort) {
            sortBy = query.sort.split(',').join(' ');
        }
        return sortBy;
    }

    limitFields(query = {}) {
        let fields;
        if (query.fields) {
            fields = query.fields.split(',').join(' ');
        }
        return fields;
    }
}

module.exports = Repository;
