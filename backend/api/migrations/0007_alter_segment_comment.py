# Generated by Django 4.0.1 on 2022-01-22 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_segment_categories_segment_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='segment',
            name='comment',
            field=models.TextField(blank=True, help_text='segment comment label', max_length=500, verbose_name='segment comment'),
        ),
    ]
