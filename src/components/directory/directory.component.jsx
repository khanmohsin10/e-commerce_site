import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) =>  (
      <div className='directory-menu'>
        {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        )
        )}
      </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
