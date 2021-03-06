"""empty message

Revision ID: 81773f40004b
Revises: 15345955ca28
Create Date: 2020-10-26 00:29:03.438546

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '81773f40004b'
down_revision = '15345955ca28'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('service_request',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('requester_name', sa.String(), nullable=True),
    sa.Column('requester_payroll', sa.Integer(), nullable=True),
    sa.Column('created_date', sa.DateTime(), nullable=False),
    sa.Column('status', sa.String(), nullable=True),
    sa.Column('estimated_total', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user', sa.Integer(), nullable=True),
    sa.Column('comment', sa.String(), nullable=True),
    sa.Column('created_date', sa.DateTime(), nullable=False),
    sa.Column('service_request_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['service_request_id'], ['service_request.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('service_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service_id', sa.String(), nullable=True),
    sa.Column('service_type', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('unit_price', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.Column('service_request_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['service_request_id'], ['service_request.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('employee')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('employee',
    sa.Column('payroll', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('payroll', name='employee_pkey')
    )
    op.drop_table('service_items')
    op.drop_table('comments')
    op.drop_table('service_request')
    # ### end Alembic commands ###
