import React from 'react';
// Styles
import './collection-preview.styles.scss';
// Components
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,index) => index < 4).map(({ id, ...other}) => (
                    <CollectionItem key={id} {...other}></CollectionItem>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;