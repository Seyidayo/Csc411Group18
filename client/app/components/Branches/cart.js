import React from 'react';

export const CartDetails = ({ CartProps }) => {
    return (
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Device Name</th>
                        <th>Problem</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CartProps.map((cartdets, index) =>
                            <tr key={index}>
                                <td>{cartdets.device}</td>
                                <td>{cartdets.problem}</td>
                                <td>{cartdets.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export const RepairDetails = ({CartProps}) => {
    return (
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Device Name</th>
                        <th>Problem</th>
                        <th>Stage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CartProps.map((cartdets, index) =>
                            <tr key={index}>
                                <td>{cartdets.device}</td>
                                <td>{cartdets.problem}</td>
                                <td>{cartdets.stage}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}