import React from 'react'
import '../DescriptionBox/DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionBox-Navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam rerum impedit dignissimos atque veritatis consequatur tempore! Vitae culpa labore architecto, animi nihil mollitia qui impedit unde rem, quis quo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam in eos sunt exercitationem voluptates aut vel aspernatur quidem, illo ad voluptatem. Labore sunt, consequuntur fugit reiciendis magnam eligendi voluptas.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
