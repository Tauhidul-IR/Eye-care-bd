import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookingDoctor?email=${user?.email}`;

    const { data: bookingDoctor = [], isLoading, refetch } = useQuery({
        queryKey: ['bookingDoctor', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    console.log(bookingDoctor);

    return (
        <div>
            <h3 className='my-10'>My Appointment</h3>
            <div className="divider"></div>
            <div>
                <Table>
                    <Thead>
                        <Tr>
                            <Th className='text-left'>Serial</Th>
                            <Th className='text-left'>Doctor</Th>
                            <Th className='text-left'>Email</Th>
                            <Th className='text-left'>Slot</Th>
                            <Th className='text-left'>Action</Th>
                            <Th className='text-left'>Agent</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            bookingDoctor.map((booking, i) => <Tr>
                                <Td>{i + 1}</Td>
                                <Td>{booking?.doctorName}</Td>
                                <Td>{booking?.email}</Td>
                                <Td>{booking?.slot}</Td>
                                <Td> <button className='btn btn-xs btn-info'>Delete</button></Td>
                                <Td className='text-left'>Coston Perkins</Td>
                            </Tr>)
                        }
                    </Tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyAppointment;