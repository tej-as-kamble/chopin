import './OrderSummary.css'
import SectionHeader from "./SectionHeader"
import { MdRestaurant } from "react-icons/md";
import { RiAlignItemRightFill } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";


const OrderSummary = ({ heading = "Order Summary", Orderdata, billData }) => {
    return (
        <div className="ui-order-summary-container">
            <SectionHeader heading={heading} icon={<MdRestaurant />} />
            <div className="ui-order-summary-body">
                {Orderdata.map((row, index) => (
                    <div key={index} className="ui-order-summary-row">
                        <div className='ui-order-summary-item'>
                            <RiAlignItemRightFill />
                            <p>{row.label} ✖{row.quantity}</p>
                        </div>
                        <div className='ui-order-summary-price'>
                            <FaRupeeSign />
                            <p>{row.price}</p>
                        </div>
                    </div>
                ))}
                <div className='ui-order-summary-bill'>
                    <p>Total ({billData.method})</p>
                    <div className='ui-order-summary-price'>
                        <FaRupeeSign />
                        <p>{billData.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
