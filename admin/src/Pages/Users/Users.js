import React from 'react'
import './users.css'
import { deleteUsers, getUsers } from '../../lib'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Users() {
  const [deleteUser, setDeleteUser] = useState ();
  const listUser = useSelector(state => state.app.users.allUser)
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch)
  }, [])

  const handleDeleteClick = (list) => {
    const deleteUserId = list._id;
    deleteUsers(deleteUserId,dispatch)             
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
                {listUser?.slice(1,10).map((item, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: 'center' }}>{item.firstName}</td>
                    <td style={{ textAlign: 'center' }}>{item.username}</td>
                    <td className='td-actions' onClick={()=>handleDeleteClick(item)}><i className="fa fa-trash-o" aria-hidden="true"></i>Delete User</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

