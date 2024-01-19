import React from 'react'


export default function Productitem(props) {
  const originalPrice = parseInt(
    props.dataItem.price.replace('đ', '').replace(',', ''),
    10
  );
  const discountPercentage = parseInt(props.dataItem.discount, 10);
  const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <div className="productItem">
      <div className="productImg">
        <img src={props.dataItem.img}></img>
        </div>
        <div className="productDetail">
        <p className="bold">{props.dataItem.name}</p>
        <div className="price">
        <p className="discountedPrice">{discountedPrice.toLocaleString()}đ</p>
        <p className="originalPrice">{parseInt(props.dataItem.price.replace('đ', '').replace(',', ''), 10).toLocaleString()}đ
</p> 
        <span className="discountTags">-{props.dataItem.discount}%</span>
        </div>
        <p><span className="bold">Chipset:</span> {props.dataItem.chip}</p>
        <p><span className="bold">Kích thước màn hình:</span> {props.dataItem.sizeScreen}</p>
        <p><span className="bold">RAM:</span> {props.dataItem.ram}GB</p>
        <p><span className="bold">Bộ nhớ trong:</span> {props.dataItem.rom}GB</p>
        <span className="compare-btn"><i class="fa-solid fa-circle-plus"></i>  Thêm vào so sánh</span>
        </div>
    </div>
  )
}
