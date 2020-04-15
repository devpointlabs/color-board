class AddDiscardedAtToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :boards, :discarded_at, :datetime
    add_index :boards, :discarded_at
  end
end
