# Generated by Django 4.0.1 on 2022-01-19 08:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_audiofile_buffer_alter_audiofile_file_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='audiofile',
            name='segment',
            field=models.ForeignKey(blank=True, help_text='select segment', null=True, on_delete=django.db.models.deletion.CASCADE, to='api.segment', verbose_name='segment'),
        ),
    ]
