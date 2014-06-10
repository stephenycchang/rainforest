class Product < ActiveRecord::Base
  has_many :reviews
  belongs_to :category
  has_many :users, :through => :reviews
  validates :description, :name, :presence => true
  validates :price_in_cents, :numericality => {:only_integer => true}

  def formatted_price
    price_in_dollars = price_in_cents.to_f / 100
    sprintf("%0.2f", price_in_dollars)
  end
end
