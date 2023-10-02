'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-modal'

// Modal.setAppElement('main')

const DonateModal = () => {

  return (
    <>
      <Modal
        isOpen={true} // The modal should always be shown on page load, it is the 'page'
        contentLabel="Post modal"
        className={'bg-red-400'}
      >
        <h1>Donate</h1>
        
      </Modal>
    </>
  )
}

export default DonateModal

