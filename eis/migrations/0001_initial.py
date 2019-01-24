# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-01-24 14:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DjangoContentType',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('app_label', models.CharField(blank=True, max_length=100, null=True)),
                ('model', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'db_table': 'django_content_type',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoMigrations',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('app', models.CharField(blank=True, max_length=255, null=True)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('applied', models.DateTimeField()),
            ],
            options={
                'db_table': 'django_migrations',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='LoginT',
            fields=[
                ('l_userid', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('l_password', models.CharField(max_length=20)),
                ('l_empno', models.CharField(max_length=10)),
                ('l_sabu', models.CharField(blank=True, max_length=6, null=True)),
                ('l_saupj', models.CharField(blank=True, max_length=6, null=True)),
                ('l_dept', models.CharField(blank=True, max_length=6, null=True)),
                ('l_wkctr', models.CharField(blank=True, max_length=6, null=True)),
                ('l_gubun', models.CharField(blank=True, max_length=1, null=True)),
            ],
            options={
                'db_table': 'login_t',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='SalesPvsrCy',
            fields=[
                ('sabu', models.CharField(max_length=1, primary_key=True, serialize=False)),
                ('saupj', models.CharField(max_length=6)),
                ('yyyy', models.CharField(max_length=4)),
                ('planqty', models.BigIntegerField(blank=True, null=True)),
                ('planamt', models.BigIntegerField(blank=True, null=True)),
                ('rsltqty', models.BigIntegerField(blank=True, null=True)),
                ('rsltamt', models.BigIntegerField(blank=True, null=True)),
                ('crt_dt', models.DateField(blank=True, null=True)),
            ],
            options={
                'db_table': 'sales_pvsr_cy',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='SalesPvsrCym',
            fields=[
                ('sabu', models.CharField(max_length=1, primary_key=True, serialize=False)),
                ('saupj', models.CharField(max_length=6)),
                ('yymm', models.CharField(max_length=6)),
                ('planqty', models.BigIntegerField(blank=True, null=True)),
                ('planamt', models.BigIntegerField(blank=True, null=True)),
                ('rsltqty', models.BigIntegerField(blank=True, null=True)),
                ('rsltamt', models.BigIntegerField(blank=True, null=True)),
                ('crt_dt', models.DateField(blank=True, null=True)),
            ],
            options={
                'db_table': 'sales_pvsr_cym',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='SalesPvsrYm',
            fields=[
                ('sabu', models.CharField(max_length=1, primary_key=True, serialize=False)),
                ('saupj', models.CharField(max_length=6)),
                ('yymm', models.CharField(max_length=6)),
                ('gubun', models.CharField(max_length=6)),
                ('gcode', models.CharField(max_length=20)),
                ('gname', models.CharField(blank=True, max_length=50, null=True)),
                ('planqty', models.BigIntegerField(blank=True, null=True)),
                ('planamt', models.BigIntegerField(blank=True, null=True)),
                ('rsltqty', models.BigIntegerField(blank=True, null=True)),
                ('rsltamt', models.BigIntegerField(blank=True, null=True)),
                ('crt_dt', models.DateField(blank=True, null=True)),
            ],
            options={
                'db_table': 'sales_pvsr_ym',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='SumLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seqno', models.IntegerField(blank=True, null=True)),
                ('yymmdd', models.CharField(blank=True, max_length=8, null=True)),
                ('yymm', models.CharField(blank=True, max_length=6, null=True)),
                ('err_proc', models.CharField(blank=True, max_length=100, null=True)),
                ('err_msg', models.CharField(blank=True, max_length=2000, null=True)),
            ],
            options={
                'db_table': 'sum_log',
                'managed': False,
            },
        ),
    ]
