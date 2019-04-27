import React from 'react';
import 'tachyons';
import './ImageLinkForm.scss';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button 
                        className='w-30 grow mt3 f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onPictureSubmit}    
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;