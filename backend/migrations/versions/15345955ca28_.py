"""empty message

Revision ID: 15345955ca28
Revises: 
Create Date: 2020-10-23 16:00:26.832700

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '15345955ca28'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('employee',
    sa.Column('payroll', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('payroll')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('employee')
    # ### end Alembic commands ###