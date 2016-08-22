'use strict';

import React from 'react';

require('styles//ConfigList.scss');

class ConfigListComponent extends React.Component {
  render() {
    return (
      <div className="configlist-component">
		<div className="add-results-wrapper">
			<div className="add-results">
				<div className="add-close-btn"></div>
				<div className="btns-group">
					<span className="title">Topics/Tags:</span>
					<a href="#">Fraud<span></span></a>
				</div>
				<div className="btns-group">
					<span className="title">Document Type:</span>
					<a href="#">Rule (2,464)<span></span></a>
				</div>
			</div>
		</div>
		
		<div className="accordion-wrapper">
			<div className="accordion">
				<div className="accordion-section">
					<a className="accordion-section-title" href="#accordion-1">Topics/Tags</a>
					<div id="accordion-1" className="accordion-section-content">
						<div className="btns-group">
							<a href="#">Interest rate</a>
							<a href="#">Retirement</a>
							<a href="#" className="active">Fraud</a>
							<a href="#">Finra</a>
							<a href="#">Derivatives</a>
							<a href="#">Union</a>
						</div>
					</div>
				</div>

				<div className="accordion-section">
					<a className="accordion-section-title" href="#accordion-2">Organization</a>
					<div id="accordion-2" className="accordion-section-content">
						<p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
					</div>
				</div>

				<div className="accordion-section">
					<a className="accordion-section-title" href="#accordion-3">Region</a>
					<div id="accordion-3" className="accordion-section-content">
						<p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
					</div>
				</div>
				
				<div className="accordion-section">
					<a className="accordion-section-title" href="#accordion-4">Country</a>
					<div id="accordion-4" className="accordion-section-content">
						<p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
					</div>
				</div>
				
				<div className="accordion-section">
					<a className="accordion-section-title" href="#accordion-5">Document Type</a>
					<div id="accordion-5" className="accordion-section-content">
						<div className="document-type">
							<div className="document-search">
								<form role="form">
									<div className="form-group">
									  <input type="text" className="form-control" placeholder="Search" />
									</div>
								 </form>
							</div>
							
							<div className="alpha-btns">
								<a href="#">A-E</a>
								<a href="#">F-J</a>
								<a href="#">K-O</a>
								<a href="#" className="active">P-T</a>
								<a href="#">U-Z</a>
							</div>
							
							<div className="btns-group">
								<a href="#" className="active">Rule (2,464)</a>
								<a href="#">Rules (827)</a>
								<a href="#">Speech (1,915)</a>
							</div>
							
						</div>
					</div>
				</div>
				
				<h3 className="sort">Sort</h3>
				
				<div className="accordion-section">
					<a className="accordion-section-title" href="#accordion-6">Most Recent</a>
					<div id="accordion-6" className="accordion-section-content">
						<p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
					</div>
				</div>
				
				<div className="accordion-section">
					<a className="accordion-section-title" href="#accordion-7">Date</a>
					<div id="accordion-7" className="accordion-section-content">
						<p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
					</div>
				</div>
				
			</div>
		</div>

		
		
		<div className="back-btn"></div>
      </div>
    );
  }
}

ConfigListComponent.displayName = 'ConfigListComponent';

// Uncomment properties you need
// ConfigListComponent.propTypes = {};
// ConfigListComponent.defaultProps = {};

export default ConfigListComponent;
