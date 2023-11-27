import "./PaymentHistoryTable.css";

const PaymentHistoryTable = ({ history, index, searchValue }) => {

    const { _id, email, rent, flatNumber, billMonth, trId, billYear, paidOn } = history
    return (



        <>
            {
                searchValue ?
                    <tbody className={billMonth.toLowerCase().includes(searchValue) ? "" : "hide"}>
                        <tr className={index % 2 == 0 ? "row" : "row oddrow"} >
                            <td>{index + 1}</td>
                            <td className="paymentEmail">{email}</td>
                            <td>{billMonth}</td>
                            <td>${rent}</td>
                            <td>${trId}</td>
                        </tr>
                    </tbody>

                    :

                    <tbody>
                        <tr className={index % 2 == 0 ? "row" : "row oddrow"} >
                            <td>{index + 1}</td>
                            <td className="paymentEmail">{email}</td>
                            <td>{billMonth}</td>
                            <td>${rent}</td>
                            <td>${trId}</td>
                        </tr>
                    </tbody>
            }


        </>

    );
};

export default PaymentHistoryTable;