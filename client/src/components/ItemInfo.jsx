/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: [],
      // quantity: 0,

    };
  }

  render() {
    const { items } = this.props;
    return (
      <div className="item-info-wrapper">
        <div className="item-brand-link-wrapper">
          <section className="item-brand-link-section">
            <div className="item-brand-link">
              <span>YETI</span>
            </div>
          </section>
        </div>
        <div className="item-title">
          <h1 className="item-title-header item-info-title h2" itemProp="name">
            <span>
              <span>
                <span>YETI</span>
              </span>
            </span>
            <span>Tundra 65 Cooler</span>
          </h1>
        </div>
        <div className="rating-wrapper"></div>
        <div id="bv2-desktop" className="col-xs-7 product-rating-wrapper offset-bv-summary-review hidden-xs hidden-sm" data-ui="product-rating-component">
          <div className="product-rating-navigable">
            <a href="#product-reviews" className="cdr-rating_6.1.1 cdr-rating--medium_6.1.1 cdr-rating--linked_6.1.1">
              <div className="cdr-rating__ratings_6.1.1">
                <span aria-hidden="true" className="cdr-rating__icon_6.1.1 cdr-rating__100_6.1.1"></span>
                <span aria-hidden="true" className="cdr-rating__icon_6.1.1 cdr-rating__100_6.1.1"></span>
                <span aria-hidden="true" className="cdr-rating__icon_6.1.1 cdr-rating__100_6.1.1"></span>
                <span aria-hidden="true" className="cdr-rating__icon_6.1.1 cdr-rating__100_6.1.1"></span>
                <span aria-hidden="true" className="cdr-rating__icon_6.1.1 cdr-rating__75_6.1.1"></span>
              </div>
              <span aria-hidden="true" className="cdr-rating__count_6.1.1">
                <span className="cdr-rating__number_6.1.1">4.8</span>
                <span>3155</span>
              </span>
            </a>
          </div>
          <div className="col-xs-5 no-gutter hidden-xs hidden-sm">
            <span className="item-number">
              Item #
              <span>
                852554
              </span>
            </span>
          </div>
        </div>
        <div className="item-price-wrapper">
          <div className="custom-price-div">
            <span className="regular-price" data-ui="size-color-price">$349.98</span>
          </div>
        </div>
        <div className="message-wrapper">
          <div className="hidden-xs hidden-sm" data-is="shipping" placement="desktop">
            <div className="item-shipping-message" data-ui="product-message-shipping">
              <span>
                Orders of $50 or more ship for free.
              </span>
            </div>

          </div>
          <div className="hidden-xs hidden-sm" data-is="member-and-price-messaging" tag_prefix="cm_sp-_-pagecontent-_-" default_pagename="rei:product details:YETI Tundra 65 Cooler_852554" estimated_savings="$35.00" from_url="/product/852554/yeti-tundra-65-cooler" show_dividend_message="true" is_clearance="false" is_sale="false">
            <aside data-ui="product-dividend-message" className="shown-on-page-load">
              <section>
                <p className="dividend-message">
                  <span className="reiDifferenceMemDiv">
                    REI Members
                  </span>
                  get back an estimated
                  <b data-ui="product-dividend-savings">
                    <span>
                      $35.00
                    </span>
                  </b>
                  on this item as part of their member dividend.
                </p>
              </section>
            </aside>
          </div>
        </div>

        <div className="item-buy-wrapper">
          <div className="item-buy-grid">
            <section>

              <form className="item-add-form">
                <div className="item-user-selection">
                  <div className="item-color-and-size-selection">
                    <div className="item-size-color-view-wrapper">
                      <fieldset className="item-color-wrapper">
                        <legend></legend>
                        <label className="item-color-title">
                          Color:
                          <span className="item-color"> Navy </span>
                        </label>
                        <div className="item-color-thumbnails-outer-wrapper">
                          <div className="item-price-wrapper">
                            <div className="item-price">
                              $349.98
                            </div>
                            <div className="item-color-thumb-container">
                              <input type="checkbox" name="color" alt="Thumb for color" title="thumb for color" value="FIX_ME!!!" />
                              <a href="FIX_ME!!!!!!!">
                                <img alt={`thumb for color ${items.options_selector.thumbnails.html_url[0]}`} className="item-color-thumb" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="item-quantity-selector-force-size">
                        <div className="item-quantity-selector-row row">
                          <div className="item-quantity-wrapper">
                            <label className="item-quantity-label" htmlFor="item-quantity-select">Quantity</label>
                            <div className="item-quantity-button-wrapper">
                              <button type="button" className="item-quantity-button">
                                <span>-</span>
                              </button>
                              <input className="item-quantity-input" name="quantity" id="item-quantity-select" type="text" min="1" max="9999" minLength="1" maxLength="4" />
                              <button type="button" className="item-quantity-button">
                                <span>+</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-shipping-options">
                    <section className="item-shipping-options-container">
                      <div className="cubside-message">
                        <p>Avoid shipping delays, choose Curbside Pickup available at select locations.</p>
                      </div>
                      <div className="ship-to-radio">
                        <input type="radio" id="ship" name="ship-option" value="SHIP" checked="checked"></input>
                        <label htmlFor="ship" className="h6">Ship to address</label>
                      </div>
                      <div className="pick-up-radio">
                        <input type="radio" id="pickup" name="ship-option" value="PICKUP"></input>
                        <label htmlFor="pickup" className="h6">
                          <div>Pick up at store</div>
                        </label>
                        <span>Find a store near you</span>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="item-buy-buttons">
                  <button id="add-to-cart" name="add-to-cart" type="submit">
                    <span>Add to cart - $349.98</span>
                  </button>
                  <div className="item-list-button-wrapper">
                    <button type="button" className="wish-list-button">Add to wish list</button>
                    <button type="button" className="registry-button">Add to registry</button>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div className="item-return-wrapper">
            <div className="item-return">
              <span>REI return Policy</span>
            </div>
          </div>
          <div className="item-zoom"></div>
        </div>
        <div className="item-details-wrapper">
          <div className="item-details">
            <p className="item-description">

            </p>
          </div>
        </div>
        <div className="item-features-specs-outer-wrapper">
          <div className="item-features-specs-inner-wrapper">
            <div className="item-features-outter-wrapper">
              <h2 className="h3-override">
                Features
              </h2>
              <div className="item-features-inner-wrapper">
                <ul className="item-features-list">
                </ul>
                <p>
                  Imported
                </p>
              </div>
              <div className="item-specs-wrapper">
                <h2 className="h3-override">
                  Technical Specs
                </h2>
                <div className="item-specs-table-wrapper">
                  <table className="item-specs-table">
                    <tbody>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>

      </div>
    );
  }
}

export default ItemInfo;
