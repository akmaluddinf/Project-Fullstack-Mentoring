"""empty message

Revision ID: 35ea995c02d6
Revises: 3af8c29e4dca
Create Date: 2020-11-03 13:01:42.482499

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '35ea995c02d6'
down_revision = '3af8c29e4dca'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('service', sa.Column('serviceId', sa.String(), nullable=True))
    op.drop_column('service', 'service_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('service', sa.Column('service_id', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_column('service', 'serviceId')
    # ### end Alembic commands ###
