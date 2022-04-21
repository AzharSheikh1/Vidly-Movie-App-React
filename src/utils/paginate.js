import _ from 'lodash';

export function paginate (items, pageNumber, pageSize) {
    const startIndex = (pageNumber -1) * pageSize;

    return _(items).slice(startIndex).take(pageSize).value();
    // let's chain these two method first convert items into lodash wrapper
    // _.slice(items, startIndex)
    // _.take(items, pageSize)
    // value will convert lodash wrapper to regular array
}