"use client"
// components/ChildrenTable.js
import { useState, useEffect } from "react";
import { fetchChildren } from "../utility/fetchChildren";

const ChildrenTable = ({ accessToken, sharedFolderUrl }) => {
    console.log('sharedFolderUrl:', sharedFolderUrl)
    console.log('accessToken:', accessToken)
    const [items, setItems] = useState([]);
    console.log('items:', items)

    useEffect(() => {
        fetchChildren(accessToken, sharedFolderUrl)
            .then(data => setItems(data))
            .catch(error => console.error(error));
    }, [accessToken, sharedFolderUrl]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Last Modified</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.size}</td>
                        <td>{new Date(item.lastModifiedDateTime).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ChildrenTable;
