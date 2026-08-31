# Atlas V1 Database Schema

## users
id, email, role, first_name, last_name, avatar_url, language, timezone, status, created_at, updated_at

## players
id, user_id, date_of_birth, nationality, second_nationality, country, city, position_primary, position_secondary, preferred_foot, height_cm, weight_kg, current_club_id, current_academy_id, bio, visibility, verification_status, profile_completion, created_at, updated_at

## player_scores
id, player_id, technical, decision, physical, mentality, discipline, atlas_score, confidence, source_report_count, calculated_at

## player_history
id, player_id, organization_id, team_name, start_date, end_date, level, notes

## organizations
id, type (club|academy), name, country, city, logo_url, website, description, verification_status, international_program, created_at

## scouts
id, user_id, countries, positions, age_groups, expertise, verification_status

## scout_reports
id, player_id, scout_id, technical, tactical, physical, mentality, professionalism, strengths, weaknesses, development_areas, recommendation, visibility, created_at, updated_at

## objectives
id, player_id, created_by, title, description, category, due_date, status, progress, completed_at

## media
id, player_id, type (video|image), title, url, thumbnail_url, category, is_primary, visibility, created_at

## opportunities
id, organization_id, type (trial|club|academy|camp|showcase|exchange|scholarship), title, country, city, age_min, age_max, positions, level, start_date, end_date, requirements, description, status, created_by

## applications
id, opportunity_id, player_id, status (applied|reviewed|shortlisted|invited|completed|accepted|rejected), message, created_at, updated_at

## recruitment_needs
id, organization_id, position, age_min, age_max, country_preference, level, preferred_foot, requirements, status

## events
id, title, type, start_at, end_at, location, owner_id, player_id, organization_id, description

## documents
id, player_id, type, file_url, status (pending|verified|rejected|expired), expires_at, visibility, uploaded_by

## messages
id, conversation_id, sender_id, recipient_id, body, read_at, created_at

## notifications
id, user_id, type, title, body, read_at, created_at

## matches
id, source_type, source_id, target_type, target_id, score, confidence, reasons_json, missing_information_json, created_at

## audit_logs
id, actor_id, action, entity_type, entity_id, metadata_json, created_at
