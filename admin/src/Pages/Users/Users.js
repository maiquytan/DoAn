import React from 'react'
import './users.css'
import { deleteUsers, getUsers } from '../../lib'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PaginateSearch from '../../Share/Components/Paginator/Paginate'

export default function Users() {
  const [deleteUser, setDeleteUser] = useState();
  const [users, setUsers] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const dispatch = useDispatch();

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getUsers(currentPage)
      if (response) {
        setUsers(response.users)
        setTotalPage(Math.ceil(response.totalUsers / 10))
      }
    }
    sendRequest()
  }, [currentPage])

  const handleDeleteClick = async(list) => {
    const deleteUserId = list._id;
    deleteUsers(deleteUserId, dispatch)

    const response = await getUsers(currentPage); // currentPage là trang hiện tại
    if (response) {
      setUsers(response.users)
      setTotalPage(Math.ceil(response.totalUsers / 10))
    }
  }

  return (
    <div className='admin-page'>
      <div className='users'>
        <div className='container'>
          <div className='admin-page-title'>
            Tài Khoản
          </div>
          < div className='admin-page-content'>
            <table className='admin-table'>
              <thead>
                <tr className='admin-th'>
                  <th style={{ textAlign: 'center' }}>Khách hàng</th>
                  <th style={{ textAlign: 'center' }}>Tên đăng nhập</th>

                  <th className='th-actions'>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {users?.slice(1, 10).map((item, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: 'center' }}>{item.firstName}</td>
                    <td style={{ textAlign: 'center' }}>{item.username}</td>
                    <td className='td-actions' onClick={() => handleDeleteClick(item)}><i className="fa fa-trash-o" aria-hidden="true"></i>Delete User</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="justify-center pagination-wrap">
              <PaginateSearch
                totalPage={totalPage}
                currentPage={currentPage}
                handleSetPage={(page) => { setCurrentPage(page) }}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

