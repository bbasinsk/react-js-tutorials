import React from "react";

export default class Item extends React.Component {
  render() {
    return (
        <div class='item'>
            <div class='item_top'>
                <div class='price'>$1200</div>
                <img class='item_hide' src='./img/hide.png'></img>
                <img class='item_pic' src='http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2015/10/Microsoft-Surface-Lumia-Event-2015-8-1200x800.jpg'></img>
            </div>

            <div class='item_bottom'>
                <div class='title'>Surface Pro 4 - i5, 256gb, 8gb ram</div>
                <div class='item_bottom_info'>
                    <span class='star'><img src='./img/glyphicons-49-star-empty.png'></img></span>
                    <span class='date'>Jan 01</span>
                </div>
            </div>
        </div>
    );
  }
}
