import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  margin: 0 auto;
`;

function ProfileImage({ className }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          profileImage
        }
      }
      ghostAuthor(slug: { eq: "angusp" }) {
        profile_image
        name
      }
    }
  `);

  const profileImage = data.ghostAuthor.profile_image || data.site.siteMetadata.profileImage;

  return <Image className={className} src={profileImage} alt={data.ghostAuthor.name} />;
}

ProfileImage.propTypes = {
  className: PropTypes.string,
};

ProfileImage.defaultProps = {
  className: null,
};

export default ProfileImage;
