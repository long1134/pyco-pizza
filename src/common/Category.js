import React from 'react';

function CategoryComponent(props) {
    return (
        <div className="category" onClick={e => props.history.push("/product/" + props.name)}>
            <img src={props.img} alt={props.name} />
            <div className="category-content">
                <div>
                    <p>{props.name}</p>
                    <button>See more</button>
                </div>
            </div>
        </div>
    );
}

export default CategoryComponent;
