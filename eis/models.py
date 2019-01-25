# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class DjangoContentType(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(max_length=100, blank=True, null=True)
    app_label = models.CharField(max_length=100, blank=True, null=True)
    model = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    app = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class LoginT(models.Model):
    l_userid = models.CharField(primary_key=True, max_length=20)
    l_password = models.CharField(max_length=20)
    l_empno = models.CharField(max_length=10)
    l_sabu = models.CharField(max_length=6, blank=True, null=True)
    l_saupj = models.CharField(max_length=6, blank=True, null=True)
    l_dept = models.CharField(max_length=6, blank=True, null=True)
    l_wkctr = models.CharField(max_length=6, blank=True, null=True)
    l_gubun = models.CharField(max_length=1, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'login_t'


class SalesPvsrCy(models.Model):
    sabu = models.CharField(primary_key=True, max_length=1)
    saupj = models.CharField(max_length=6)
    yyyy = models.CharField(max_length=4)
    planqty = models.BigIntegerField(blank=True, null=True)
    planamt = models.BigIntegerField(blank=True, null=True)
    rsltqty = models.BigIntegerField(blank=True, null=True)
    rsltamt = models.BigIntegerField(blank=True, null=True)
    crt_dt = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sales_pvsr_cy'
        unique_together = (('sabu', 'saupj', 'yyyy'),)


class SalesPvsrCym(models.Model):
    sabu = models.CharField(primary_key=True, max_length=1)
    saupj = models.CharField(primary_key=True, max_length=6)
    yymm = models.CharField(primary_key=True, max_length=6)
    planqty = models.BigIntegerField(blank=True, null=True)
    planamt = models.BigIntegerField(blank=True, null=True)
    rsltqty = models.BigIntegerField(blank=True, null=True)
    rsltamt = models.BigIntegerField(blank=True, null=True)
    crt_dt = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sales_pvsr_cym'
        unique_together = (('sabu', 'saupj', 'yymm'),)


class SalesPvsrYm(models.Model):
    sabu = models.CharField(primary_key=True, max_length=1)
    saupj = models.CharField(max_length=6)
    yymm = models.CharField(max_length=6)
    gubun = models.CharField(max_length=6)
    gcode = models.CharField(max_length=20)
    gname = models.CharField(max_length=50, blank=True, null=True)
    planqty = models.BigIntegerField(blank=True, null=True)
    planamt = models.BigIntegerField(blank=True, null=True)
    rsltqty = models.BigIntegerField(blank=True, null=True)
    rsltamt = models.BigIntegerField(blank=True, null=True)
    crt_dt = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sales_pvsr_ym'
        unique_together = (('sabu', 'saupj', 'yymm', 'gubun', 'gcode'),)


class SumLog(models.Model):
    seqno = models.IntegerField(blank=True, null=True)
    yymmdd = models.CharField(max_length=8, blank=True, null=True)
    yymm = models.CharField(max_length=6, blank=True, null=True)
    err_proc = models.CharField(max_length=100, blank=True, null=True)
    err_msg = models.CharField(max_length=2000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sum_log'
