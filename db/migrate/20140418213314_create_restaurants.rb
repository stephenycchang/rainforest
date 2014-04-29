class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.string :summary
      t.string :menu
      t.integer :price_range
      t.string :available_timeslots

      t.timestamps
    end
  end
end
