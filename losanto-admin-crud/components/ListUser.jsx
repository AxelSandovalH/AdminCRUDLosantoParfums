
import Link from "next/link";

export default function ListUser() {
    return(
        <table className="table table-zebra">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Username</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                                        
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b">
                    <td className="py-3 px-6  bg-blue-700">1</td>
                    <td className="py-3 px-6 bg-blue-700">Axel sandoval</td>
                    <td className="py-3 px-6 bg-blue-700">asandoval13@ucol.mx</td>
                    <td className="py-3 px-6 bg-blue-700">Suzuya</td>
                    <td className="flex justify-center gap-1 py-3">
                        <Link
                            href="#"
                            className="btn btn-success">
                            Read
                        </Link>
                        <Link className="btn btn-info" href="#">
                        Edit</Link>
                        <button className="btn btn-error">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}