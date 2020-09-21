import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize(
    (collectionUrlParam) => createSelector(
        [selectShopCollection],
        collections => collections[collectionUrlParam])
)